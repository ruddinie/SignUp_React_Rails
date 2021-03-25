import { toast } from 'react-toastify';

export default function login_handler(auth, history) {
    
    // console.log(history)
    switch (auth.status) {
        case 201:
            history.push('/dashboard');
            toast.success('Bem vindo! Você entrou com sucesso!');
            break;
        case 401:   
            toast.error('E-mail ou senha incorretos');
            break;
        case 500:
            toast.error('Ocorreu um erro. Verifique se já não está cadastrou ou tente novamente mais tarde');
            break;
        default:
            break;
    }
    

}
