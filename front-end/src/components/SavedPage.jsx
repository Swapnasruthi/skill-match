import SavedProjectCard from "../inner-components/SavedProjectCard";
import formData from "../utils/MockData.js";
const SavedPage=()=>{
    return(
        <div>
            <SavedProjectCard data={formData}/>
            <SavedProjectCard data={formData}/>
        </div>
    )
}
export default SavedPage;