import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Box pt={{ base: "130px", md: "100px", xl: "80px" }}>
   
    
      <SimpleGrid columns={{ base: 50, md: 1, xl: 1 }} gap='10px' mb='10px'> 
      {/* <Text>Choose Trends Parameter</Text> */}
      <DropdownButton id="dropdown-basic-button" title="Trends Parameter">
     
     <Dropdown.Item href="#/action-2">Weekly</Dropdown.Item>
     <Dropdown.Item href="#/action-3">Monthly</Dropdown.Item>
    

   </DropdownButton>

        </SimpleGrid>
       
      <SimpleGrid columns={{ base: 10, md: 2, xl: 1 }} gap='20px' mb='20px'>
        {/* <TotalSpent /> */}
        <WeeklyRevenue />
      </SimpleGrid>
      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <DailyTraffic />
          <PieCard />
        </SimpleGrid>
      </SimpleGrid> */}
      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <Tasks />
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
        </SimpleGrid>
      </SimpleGrid> */}
    </Box>
  );
}
