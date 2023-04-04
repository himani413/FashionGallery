import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./aHome.css"
import  Chart  from "../../components/chart/Chart"
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import UserList from "../userList/UserList";


export const AHome = () => {
  return (
    <div className="aHome">
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
        
    </div>
  )
}
