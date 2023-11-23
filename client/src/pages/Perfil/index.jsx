import { Link } from "react-router-dom";
import BaseLayout from "../../components/BaseLayout";
import { ProfileDiv } from "../../components/ProfileDiv";
import { ProfileInput } from "../../components/ProfileInput";

function Perfil() {
    return(
        <BaseLayout pageName="Perfil" backPath="/perfil" style="p-8">
        <div>
            <ProfileDiv title="Informações Gerais">
                <div>
                    <ProfileInput label={"Nome"} content={"VK"}/>
                </div>
            </ProfileDiv>
        </div>
        </BaseLayout>
    )
}

export default Perfil;