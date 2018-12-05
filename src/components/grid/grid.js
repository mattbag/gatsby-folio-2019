import Cell from './cell'
import BG from "../../images/drops/1.jpg"

export default ({ classType }) => <div className={`grid grid--layout-${classType || 1}`}>
    <Cell bg={BG} />
    <Cell bg={BG} />
    <Cell bg={BG} />
    <Cell bg={BG} />
    <Cell bg={BG} />
</div>