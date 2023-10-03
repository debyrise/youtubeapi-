import {createBrowserRouter} from "react-router-dom"
import Weblayout from "../component/layouts/Weblayout"
import History from "../Pages/History"
import Library from "../Pages/Library"
import Likes from "../Pages/Likes"
import Report from "../Pages/Report"
import Settings from "../Pages/Settings"
import Show from "../Pages/Show"
import Subscription from "../Pages/Subscription"
import Trendings from "../Pages/Trendings"
import Homescreen from "../Pages/Homescreen"
import Shorts from "../Pages/Short"
import DetailedVideo from "../Pages/DetailedVideo"





const Index = createBrowserRouter([

    {
        path: "/",
        element:<Weblayout  />,
        
        children:
         [  {
            index:true,
            element: <Homescreen />

         },
         {
            path: "shorts",
            element:<Shorts />
         },
           {
            path: " history",
            element: < History />
           },


           {
            path: " watch/:id",
            element: < DetailedVideo />
           },



           {
            path: "library ",
            element: < Library  />
           },
           {
            path: "likes",
            element: < Likes  />
           },
           
           
           {
            path: " report",
            element: < Report  />
           },
           {
            path: "settings",
            element: < Settings  />
           },
           {
            path: "show ",
            element: < Show  />
           },

           
           {
            path: "subscription ",
            element: < Subscription  />
           },
           {
            path: "trendings ",
            element: < Trendings  />
           },
           



        ]
        

    },
       

   




])


export default Index