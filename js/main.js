(function () {
		// left menu link highlight
		var leftMenu = $('.left-menu');
		var activeLink = leftMenu.find('[href="' + window.location.pathname + '"]');
		activeLink.parents('li').addClass("active");

		leftMenu.find('.api-section').click(function () {
				if ($(this).attr('href') == '#') {
						$(this).closest('.left-menu').find("li").removeClass('active');
						$(this).closest('li').toggleClass('active');
						return false;
				}
		});

		$(document).ready(function () {
				var searchInput = $("#searchInput");
				var searchResults = $("#searchResults");
				var searchIcon = $('#searchIcon');
				var noSearchResults = $("#noSearchResults");


				searchResults.hide();
				searchIcon.show();
				searchInput.val('');


				setTimeout(function () {
						try {
								var localData = JSON.parse(localStorage.getItem('search-index'));
								if (localData && (localData.ts + 86400000) > Date.now()) {
										searchReady(localData);
										return;
								}
						} catch (e) {
						}

						$.getJSON('/docs/plugins/plugins.json', function (requestData) {
								searchReady(requestData);
								setTimeout(function () {
										try {
												requestData.ts = Date.now();
												localStorage.setItem('search-index', JSON.stringify(requestData))
										} catch (e) {
										}
								}, 100);
						});

				}, 5);

				var debounce = function (fn) {
						var timeout;
						return function () {
								var args = Array.prototype.slice.call(arguments),
										ctx = this;

								clearTimeout(timeout);
								timeout = setTimeout(function () {
										fn.apply(ctx, args);
								}, 50);
						}
				};

				function searchReady(data) {
						searchInput.on('keydown', debounce(function () {
								var query = $(this).val();
								if (query.length > 1) {
										$(this).addClass("has-text");
										searchResults.show();
										FilterJS(data, '#searchResults', {
												template: '#template',
												search: {ele: '#searchInput'},
												callbacks: {
														afterFilter: function (result) {
																if (!result.length) {
																		noSearchResults.show();
																}
																else {
																		noSearchResults.hide();
																}
														}
												}
										});
								}
								else {
										searchResults.hide();
								}
						}));
				}

				searchInput.focus(function () {
						searchIcon.hide();
				});

				searchInput.blur(function () {
						setTimeout(function () {
								searchIcon.show();
								searchInput.val('');
								searchResults.hide();
								noSearchResults.hide();
						}, 50);
				})

		});
})();
