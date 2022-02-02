import '../styles/main.scss'


const MyApp = ({Component, PageProps}) => {
    return (
        <>
            <Component{ ...PageProps }/>
        </>
    )


}

export default MyApp
