'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import { RadarHeroChart } from './radar-chart';
import { Switch } from './ui/switch';
import { useState } from 'react';
import HeroModel from './hero/hero';

type Props = {
  arrayOfCharacters: {
    name: string
    avatar: {
      src: string
    }
    image: any
    description: string
    value: string
    chartData: {
      value: number
      label: string
    }[]
    modelPath: string
  }[]
  defaultValue: string
};

export function Characters({ arrayOfCharacters, defaultValue }: Props) {
  const [is3DView, set3DView] = useState(false);
  return (
    <div className="w-full">
      <Tabs
        defaultValue={defaultValue}
        className="flex w-full flex-col justify-center"
      >
        <TabsList className="my-2 justify-center gap-4 md:gap-8">
          {arrayOfCharacters.map((character) => (
            <TabsTrigger
              key={character.name}
              value={character.value}
              backgroundImage={character.avatar.src}
              className="h-12 w-12 md:h-16 md:w-16 rounded-xl border-2 border-gray-600 bg-black/70"
            ></TabsTrigger>
          ))}
        </TabsList>

        {arrayOfCharacters.map((character) => (
          <TabsContent key={character.name} value={character.value}>
            <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <div className="relative h-full">
                  <div className="mb-4">
                    <p className="mr-2 inline text-lg md:text-2xl text-white">3D view</p>
                    <Switch
                      onCheckedChange={() => {
                        set3DView(!is3DView);
                      }}
                    />
                  </div>
                  {is3DView ? (
                    <HeroModel modelPath={character.modelPath} />
                  ) : (
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={character.image}
                        alt={character.name}
                        layout="fill"
                        objectFit="contain"
                        className="relative z-10 drop-shadow-[-8px_0px_8px_rgba(0,0,0,0.40)]"
                      />
                      <div className="absolute bottom-4 left-[45%] h-[25px] w-[45%] -translate-x-1/2 transform bg-black opacity-90 blur-xl"></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative md:col-span-3 flex sm:max-h-[463px] w-full flex-col border border-gray-600 bg-black/70 p-2 px-4 shadow-[0_10px_45px_1px_rgba(0,0,0,0.4)]">
                <div className="z-100 pointer-events-none absolute inset-0 before:absolute before:-left-[2px] before:-top-[2px] before:h-2 before:w-2 before:border-l-2 before:border-t-2 before:border-white before:content-[''] after:absolute after:-right-[2px] after:-top-[2px] after:h-2 after:w-2 after:border-r-2 after:border-t-2 after:border-white after:content-['']">
                  <div className="pointer-events-none absolute inset-0 before:absolute before:-bottom-[2px] before:-left-[2px] before:h-2 before:w-2 before:border-b-2 before:border-l-2 before:border-white before:content-[''] after:absolute after:-bottom-[2px] after:-right-[2px] after:h-2 after:w-2 after:border-b-2 after:border-r-2 after:border-white after:content-['']"></div>
                </div>
                <p className="mx-auto my-2 border-b text-center text-xl text-white">
                  {character.name}
                </p>
                <p className="text-base md:text-xl text-white">{character.description}</p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:ml-8 flex flex-col justify-center">
                    <div className="inline-flex items-center">
                      <div className="my-2 h-8 w-8 md:h-12 md:w-12 rounded-lg border-2 border-gray-600 bg-gray-500" />
                      <p className="ml-4 flex flex-col justify-center text-center text-base md:text-xl text-white">
                        Adaptable Tactics
                      </p>
                    </div>
                    <div className="inline-flex items-center">
                      <div className="my-2 h-8 w-8 md:h-12 md:w-12 rounded-lg border-2 border-gray-600 bg-gray-500" />
                      <p className="ml-4 flex flex-col justify-center text-center text-base md:text-xl text-white">
                        Stalwart Defense
                      </p>
                    </div>
                    <div className="inline-flex items-center">
                      <div className="my-2 h-8 w-8 md:h-12 md:w-12 rounded-lg border-2 border-gray-600 bg-gray-500" />
                      <p className="ml-4 flex flex-col justify-center text-center text-base md:text-xl text-white">
                        Battle Command
                      </p>
                    </div>
                    <div className="inline-flex items-center">
                      <div className="my-2 h-8 w-8 md:h-12 md:w-12 rounded-lg border-2 border-gray-600 bg-gray-500" />
                      <p className="ml-4 flex flex-col justify-center text-center text-base md:text-xl text-white">
                        Tactical Insight
                      </p>
                    </div>
                  </div>
                  <div>
                    <RadarHeroChart chartData={character.chartData} />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}