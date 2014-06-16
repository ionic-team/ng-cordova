using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using Microsoft.Phone.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Media;

namespace WPCordovaClassLib.Cordova.Commands
{
    public class Toast : BaseCommand
    {

        Popup popup;

        private PhoneApplicationPage Page
        {
            get
            {
                PhoneApplicationPage page = null;
                PhoneApplicationFrame frame = Application.Current.RootVisual as PhoneApplicationFrame;
                if (frame != null)
                {
                    page = frame.Content as PhoneApplicationPage;
                }
                return page;
            }
        }

        public void show(string options)
        {
            string[] args = JSON.JsonHelper.Deserialize<string[]>(options);
            var message = args[0];
            var duration = args[1];
            var position = args[2];
            string aliasCurrentCommandCallbackId = args[3];

            Deployment.Current.Dispatcher.BeginInvoke(() =>
            {
                PhoneApplicationPage page = Page;
                if (page != null)
                {
                    Grid grid = page.FindName("LayoutRoot") as Grid;
                    if (grid != null)
                    {
                        TextBlock tb = new TextBlock();
                        tb.TextWrapping = TextWrapping.Wrap;
                        tb.TextAlignment = TextAlignment.Center;
                        tb.Text = message;
                        tb.Foreground = new SolidColorBrush(Color.FromArgb(255,255,255,255)); // white

                        Border b = new Border();
                        b.CornerRadius = new CornerRadius(12);
                        b.Background = new SolidColorBrush(Color.FromArgb(190, 55, 55, 55));
                        b.HorizontalAlignment = HorizontalAlignment.Center;
                        
                        Grid pgrid = new Grid();
                        pgrid.HorizontalAlignment = HorizontalAlignment.Stretch;
                        pgrid.VerticalAlignment = VerticalAlignment.Stretch;
                        pgrid.Margin = new Thickness(20);
                        pgrid.Children.Add(tb);
                        pgrid.Width = Application.Current.Host.Content.ActualWidth - 80;

                        b.Child = pgrid;
                        if (popup != null && popup.IsOpen)
                        {
                            popup.IsOpen = false;
                        }
                        popup = new Popup();
                        popup.Child = b;
  
                        popup.HorizontalOffset = 20;
                        popup.Width = Application.Current.Host.Content.ActualWidth;
                        popup.HorizontalAlignment = HorizontalAlignment.Center;

                        if ("top".Equals(position))
                        {
                            popup.VerticalAlignment = VerticalAlignment.Top;
                            popup.VerticalOffset = 20;
                        }
                        else if ("bottom".Equals(position))
                        {
                            popup.VerticalAlignment = VerticalAlignment.Bottom;
                            popup.VerticalOffset = -100; // TODO can do better
                        }
                        else // center
                        {
                            popup.VerticalAlignment = VerticalAlignment.Center;
                            popup.VerticalOffset = -50; // TODO can do way better
                        }

                        grid.Children.Add(popup);
                        popup.IsOpen = true;

                        int hideDelay = "long".Equals(duration) ? 5500 : 2800;
                        this.hidePopup(hideDelay);
                    }
                }
                else
                {
                    DispatchCommandResult(new PluginResult(PluginResult.Status.INSTANTIATION_EXCEPTION));
                }
            });
        }

        private async void hidePopup(int delay)
        {
            await Task.Delay(delay);
            popup.IsOpen = false;
        }
    }
}