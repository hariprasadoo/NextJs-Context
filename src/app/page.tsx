"use client";
import Link from './components/Links';
import Route from './components/Route';
import AccordionPage from './pages/accordionpage/page';
import DropdownPage from './pages/dropdownpage/page';

export default function Home() {
   
  return (
    <main className="flex flex-col items-center justify-between">
      <h1>home</h1>
      <div>
      <Link to='/pages/accordionpage' >Accordion Page</Link>
      <Link to='/pages/dropdownpage' >Dropdown Page</Link>
      </div>
      <div>
        <Route path='/pages/accordionpage'><AccordionPage/></Route>
        <Route path='/pages/dropdownpage'><DropdownPage/></Route>
      </div>
    </main>
  );
}
