"use client";
import Accordion from '../../components/Accordion';

export default function AccordionPage() {
  const items = [
    {
      id: 55,
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 23,
      label: 'Can I use Javascript on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 376,
      label: 'Can I use CSS on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
  ];
  
  return (
    <main className="flex flex-col items-center justify-between">
      <Accordion items={items}/>

    </main>
  );
}
