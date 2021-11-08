
import { useUser } from "../../Contexts/useUser"

export function Profile() {

    const { userState } = useUser()

    
    console.log(userState)


    return (
        <>
            <h1>Meu perfil</h1>
            
        </>
    )
}