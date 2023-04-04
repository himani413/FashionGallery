import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./aHome.css"
import  Chart  from "../../components/chart/Chart"
import { userData } from "../../dummyData";


export const AHome = () => {
  return (
    <div className="aHome">
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets"></div>
    </div>
  )
}
