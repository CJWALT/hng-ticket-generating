
import Nav from "./component/nav";
import "./globals.css";


export const metadata = {
  title: "Ticket Booking",
  description: "let you create your event ticket",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body

        >
          <Nav/>
          {/* <div className="mx-auto w-[90%]"> */}
          {children}

          {/* </div> */}
        
      </body>
    </html>
  );
}
