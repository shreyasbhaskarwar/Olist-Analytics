import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdHome,
} from "react-icons/md";

// Admin Imports
import MainDashboard from "views/admin/default";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import SignUpCentered from "views/auth/signIn/signup";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  
  {
    name: "Trend 1",
    layout: "/admin",
    path: "/Trend2",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,

    component: MainDashboard,
  },
  {
    name: "Trend 2",
    layout: "/admin",
    path: "/Trend3",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Trend 3",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "Trend 4",
    layout: "/auth",
    path: "/sign-up",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    component: SignUpCentered,
  }, {
    name: "Trend 5",
    layout: "/admin",
    path: "/Trend5",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
 
];

export default routes;
