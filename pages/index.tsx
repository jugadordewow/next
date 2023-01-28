import {Htag} from "../components/Htag/Htag";
import {Button, Tag} from "../components";
import {Paragraph} from "../components/Paragraph/Paragraph";
import {useState} from "react";
import {Raiting} from "../components/Rating/Raiting";

export default function Home():JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
        <Htag tag={"h1"}>{counter}</Htag>
        <Button apperance={"primary"} onClick={() => setCounter(counter+1)}>Button</Button>
        <Button apperance={"ghost"}>Button</Button>
        <Paragraph size={"small"}>Small text</Paragraph>
        <Paragraph size={"medium"}>Medium text</Paragraph>
        <Paragraph size={"large"}>Large text</Paragraph>
        <Tag size={"small"} color={'red'}>RED</Tag>
        <Raiting raiting={4} />
    </>
  )
}
