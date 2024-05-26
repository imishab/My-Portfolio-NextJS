import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mishab",
  description: "Web/App Developer &amp; Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
<html lang="en">

<head>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Mishab - Web/App Developer & Designer" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="theme-color" content="#061238" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  {/* Title*/}
  <title>Mishab - Web/App Developer &amp; Designer</title>
  {/* Fonts*/}
  <link rel="preconnect" href="https://fonts.gstatic.com/" />
  <link
    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  {/* Favicon*/}
  <link rel="icon" href="assets/img/me/logo.png" />
  <link rel="apple-touch-icon" href="assets/img/me/logo.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="assets/img/me/logo.png" />
  <link rel="apple-touch-icon" sizes="167x167" href="assets/img/me/logo.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="assets/img/me/logo.png" />
  {/* CSS Libraries*/}
  <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/animate.css" />
  <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
  <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
  <link rel="stylesheet" href="assets/css/bootstrap-icons.css" />
  <link rel="stylesheet" href="assets/css/magnific-popup.css" />
  <link rel="stylesheet" href="assets/css/ion.rangeSlider.min.css" />
  <link rel="stylesheet" href="assets/css/dataTables.bootstrap4.min.css" />
  <link rel="stylesheet" href="assets/css/apexcharts.css" />
  <link rel="stylesheet" href="assets/css/fontstyle.css" />
  <link rel="stylesheet" href="assets/css/prestyle.css" />
  {/* Core Stylesheet*/}
  <link rel="stylesheet" href="assets/style.css" />
  <link rel="stylesheet" href="assets/style2.css" />

  </head>
  
      <body className={inter.className}>
      {children}
        </body>
      <script src="assets/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/default/internet-status.js"></script>
  <script src="assets/js/waypoints.min.js"></script>
  <script src="assets/js/jquery.easing.min.js"></script>
  <script src="assets/js/wow.min.js"></script>
  <script src="assets/js/owl.carousel.min.js"></script>
  <script src="assets/js/jquery.counterup.min.js"></script>
  <script src="assets/js/jquery.countdown.min.js"></script>
  <script src="assets/js/imagesloaded.pkgd.min.js"></script>
  <script src="assets/js/isotope.pkgd.min.js"></script>
  <script src="assets/js/jquery.magnific-popup.min.js"></script>
  <script src="assets/js/default/dark-mode-switch.js"></script>
  <script src="assets/js/ion.rangeSlider.min.js"></script>
  <script src="assets/js/jquery.dataTables.min.js"></script>
  <script src="assets/js/default/active.js"></script>
  <script src="assets/js/default/clipboard.js"></script>
  <script src="assets/js/pwa.js"></script>

</html>
    </>
  );

}
