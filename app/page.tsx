import Image from "next/image";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { EvervaultCard } from "@/components/ui/evervault-card";
import { MathCard } from "@/components/ui/math-card";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export default function Home() {
  return (
    <>
      <MacbookScroll />
      <div className="p-64"></div>
      <div className="p-64"></div>

      <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Matematika
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Matematika Gaussův Integrál , Taylorovy a Maclaurinovy řady
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/MATHSBACKGROUND2.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
      <div className="flex flex-row">
        <div className="border  dark:border-white/[0.2] rounded-2xl flex flex-row items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <EvervaultCard />
        </div>
        <div className="border  dark:border-white/[0.2] rounded-2xl flex flex-row items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <EvervaultCard />
        </div>
        <div className="border  dark:border-white/[0.2] rounded-2xl flex flex-row items-start max-w-sm mx-auto p-4 relative h-[30rem]">
          <MathCard />
        </div>
      </div>
    </>
  );
}
