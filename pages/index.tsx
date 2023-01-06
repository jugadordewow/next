import {Htag} from "../components/Htag/Htag";
import {Button} from "../components";
import {Paragraph} from "../components/Paragraph/Paragraph";


export default function Home():JSX.Element {
  return (
    <>
      <Htag tag={"h1"}>Текст</Htag>
        <Button apperance={"primary"}>Button</Button>
        <Button apperance={"ghost"}>Button</Button>
        <Paragraph size={"small"}>Small text</Paragraph>
        <Paragraph size={"medium"}>Medium text</Paragraph>
        <Paragraph size={"large"}>Large text</Paragraph>
    </>
  )
}
