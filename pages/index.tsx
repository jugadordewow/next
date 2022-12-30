import {Htag} from "../components/Htag/Htag";
import {Button} from "../components";


export default function Home():JSX.Element {
  return (
    <>
      <Htag tag={"h1"}>Текст</Htag>
      <Button apperance={"primary"}>Button</Button>
        <Button apperance={"ghost"}>Button</Button>
    </>
  )
}
