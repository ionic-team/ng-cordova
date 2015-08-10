'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular2SrcFacadeLang = require('angular2/src/facade/lang');

var _angular2SrcFacadeCollection = require('angular2/src/facade/collection');

var ContinuationSegment = (function () {
    function ContinuationSegment() {
        _classCallCheck(this, ContinuationSegment);
    }

    _createClass(ContinuationSegment, [{
        key: 'generate',
        value: function generate(params) {
            return '';
        }
    }]);

    return ContinuationSegment;
})();

var StaticSegment = (function () {
    function StaticSegment(string) {
        _classCallCheck(this, StaticSegment);

        this.name = '';
        this.regex = escapeRegex(string);
    }

    _createClass(StaticSegment, [{
        key: 'generate',
        value: function generate() {
            return this.regex;
        }
    }]);

    return StaticSegment;
})();

var DynamicSegment = (function () {
    function DynamicSegment(name) {
        _classCallCheck(this, DynamicSegment);

        this.regex = '([^/]+)';
    }

    _createClass(DynamicSegment, [{
        key: 'generate',
        value: function generate(params) {
            if (!_angular2SrcFacadeCollection.StringMapWrapper.contains(params, this.name)) {
                throw new _angular2SrcFacadeLang.BaseException('Route generator for \'' + this.name + '\' was not included in parameters passed.');
            }
            return (0, _angular2SrcFacadeLang.normalizeBlank)(_angular2SrcFacadeCollection.StringMapWrapper.get(params, this.name));
        }
    }]);

    return DynamicSegment;
})();

var StarSegment = (function () {
    function StarSegment(name) {
        _classCallCheck(this, StarSegment);

        this.regex = '(.+)';
    }

    _createClass(StarSegment, [{
        key: 'generate',
        value: function generate(params) {
            return (0, _angular2SrcFacadeLang.normalizeBlank)(_angular2SrcFacadeCollection.StringMapWrapper.get(params, this.name));
        }
    }]);

    return StarSegment;
})();

var paramMatcher = _angular2SrcFacadeLang.RegExpWrapper.create('^:([^/]+)$');
var wildcardMatcher = _angular2SrcFacadeLang.RegExpWrapper.create('^\\*([^/]+)$');
function parsePathString(route) {
    // normalize route as not starting with a "/". Recognition will
    // also normalize.
    if (_angular2SrcFacadeLang.StringWrapper.startsWith(route, '/')) {
        route = _angular2SrcFacadeLang.StringWrapper.substring(route, 1);
    }
    var segments = splitBySlash(route);
    var results = [];
    var specificity = 0;
    // The "specificity" of a path is used to determine which route is used when multiple routes match
    // a URL.
    // Static segments (like "/foo") are the most specific, followed by dynamic segments (like
    // "/:id"). Star segments
    // add no specificity. Segments at the start of the path are more specific than proceeding ones.
    // The code below uses place values to combine the different types of segments into a single
    // integer that we can
    // sort later. Each static segment is worth hundreds of points of specificity (10000, 9900, ...,
    // 200), and each
    // dynamic segment is worth single points of specificity (100, 99, ... 2).
    if (segments.length > 98) {
        throw new _angular2SrcFacadeLang.BaseException('\'' + route + '\' has more than the maximum supported number of segments.');
    }
    var limit = segments.length - 1;
    for (var i = 0; i <= limit; i++) {
        var segment = segments[i],
            match;
        if ((0, _angular2SrcFacadeLang.isPresent)(match = _angular2SrcFacadeLang.RegExpWrapper.firstMatch(paramMatcher, segment))) {
            results.push(new DynamicSegment(match[1]));
            specificity += 100 - i;
        } else if ((0, _angular2SrcFacadeLang.isPresent)(match = _angular2SrcFacadeLang.RegExpWrapper.firstMatch(wildcardMatcher, segment))) {
            results.push(new StarSegment(match[1]));
        } else if (segment == '...') {
            if (i < limit) {
                // TODO (matsko): setup a proper error here `
                throw new _angular2SrcFacadeLang.BaseException('Unexpected "..." before the end of the path for "' + route + '".');
            }
            results.push(new ContinuationSegment());
        } else if (segment.length > 0) {
            results.push(new StaticSegment(segment));
            specificity += 100 * (100 - i);
        }
    }
    return { segments: results, specificity: specificity };
}
function splitBySlash(url) {
    return url.split('/');
}
// represents something like '/foo/:bar'

var PathRecognizer = (function () {
    function PathRecognizer(path) {
        var _this = this;

        _classCallCheck(this, PathRecognizer);

        this.segments = [];
        var parsed = parsePathString(path);
        var specificity = parsed['specificity'];
        var segments = parsed['segments'];
        var regexString = '^';
        _angular2SrcFacadeCollection.ListWrapper.forEach(segments, function (segment) {
            if (segment instanceof ContinuationSegment) {
                _this.terminal = false;
            } else {
                regexString += '/' + segment.regex;
            }
        });
        if (this.terminal) {
            regexString += '$';
        }
        this.regex = _angular2SrcFacadeLang.RegExpWrapper.create(regexString);
        this.segments = segments;
        this.specificity = specificity;
    }

    _createClass(PathRecognizer, [{
        key: 'parseParams',
        value: function parseParams(url) {
            var params = _angular2SrcFacadeCollection.StringMapWrapper.create();
            var urlPart = url;
            for (var i = 0; i < this.segments.length; i++) {
                var segment = this.segments[i];
                if (segment instanceof ContinuationSegment) {
                    continue;
                }
                var match = _angular2SrcFacadeLang.RegExpWrapper.firstMatch(_angular2SrcFacadeLang.RegExpWrapper.create('/' + segment.regex), urlPart);
                urlPart = _angular2SrcFacadeLang.StringWrapper.substring(urlPart, match[0].length);
                if (segment.name.length > 0) {
                    _angular2SrcFacadeCollection.StringMapWrapper.set(params, segment.name, match[1]);
                }
            }
            return params;
        }
    }, {
        key: 'generate',
        value: function generate(params) {
            return _angular2SrcFacadeCollection.ListWrapper.join(_angular2SrcFacadeCollection.ListWrapper.map(this.segments, function (segment) {
                return '/' + segment.generate(params);
            }), '');
        }
    }]);

    return PathRecognizer;
})();

exports.PathRecognizer = PathRecognizer;

var specialCharacters = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];
var escapeRe = _angular2SrcFacadeLang.RegExpWrapper.create('(\\' + specialCharacters.join('|\\') + ')', 'g');
function escapeRegex(string) {
    return _angular2SrcFacadeLang.StringWrapper.replaceAllMapped(string, escapeRe, function (match) {
        return '\\' + match;
    });
}