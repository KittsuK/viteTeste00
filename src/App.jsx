import Grafico from "./components/Grafico"

export const App = () => {
    return(
        <>
        <Grafico text="Grafico de linha" color="lightpink" wathChart='line'/>
        <Grafico text="Grafico de area" color="lightblue" wathChart='area'/>
        <Grafico text="Grafico de pizza" color="lightgray" wathChart='pie'/>
        <Grafico text="Grafico de barra" color="lightgreen" wathChart='bar'/>
        </>
    )
}