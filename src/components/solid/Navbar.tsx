import type { Component } from 'solid-js'
import { onMount, createSignal, For } from 'solid-js'

const Navbar: Component<{ links: string[] }> = (props) => {
  const [current, setCurrent] = createSignal('')

  onMount(() => {
    getSection()

    window.onscroll = () => {
      getSection()
    }
  })

  const getSection = () => {
    const sections = document.querySelectorAll('div')
    const nav = document.getElementById('changenav')
    const test = document.querySelector('header')

    sections.forEach(section => {
      const sectionTop = section.offsetTop
      if (window.scrollY + 200 > sectionTop) {
        setCurrent(section.getAttribute('id'))
      }
    })
    if (window.scrollY>50) {
      test.classList.add('bg-[#f8f4fa]')
      nav.classList.add('bg-[#f8f4fa]')
    } 
    else {
      nav.classList.remove('bg-[#f8f4fa]')
      test.classList.remove('bg-[#f8f4fa]')
    }
  }

  return (
    <ul class="h-full space-x-3 py-4 pr-2 font-bold uppercase text-black">
      <For each={props.links}>
        {(link) => (
          <li
            class={`hidden md:inline space-x-8 text-xl ${
              current() === link ? 'text-yellow-500' : ''
            }`}
          >
            <a class="inline relative transition-all before:w-0 before:h-[3px] 
                      before:absolute before:-bottom-1 before:right-0 before:bg-[#070808] before:transition-all before:duration-400
                      hover:before:w-full hover:before:left-0 hover:before:bg-[#070808] " href={`#${link}`}>
              {link}
            </a>
          </li>
        )}
      </For>
    </ul>
  );
};

export default Navbar;
