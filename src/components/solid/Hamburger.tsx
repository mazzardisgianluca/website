import type { Component } from 'solid-js'
import { onMount, createSignal, For } from 'solid-js'

const Hamburger: Component<{ links: string[] }> = props => {
  const [current, setCurrent] = createSignal('')

  onMount(() => {
    getSection()

    window.onscroll = () => {
      getSection()
    }
  })

  const getSection = () => {
    const sections = document.querySelectorAll('div')

    sections.forEach(section => {
      const sectionTop = section.offsetTop
      if (window.scrollY + 200 >= sectionTop) {
        setCurrent(section.getAttribute('id'))
      }
    })
  }

  return (
    <ul class="h-full space-x-4 pr-2 font-bold uppercase text-black list-none flex min-h-screen flex-col items-center">
      <For each={props.links}>
        {link => (
            //py-6 -> Cambia lo spazio tra i link del menu, per il testo nell'index, ultima classe
          <li class={`w-full py-6 text-center ${current() === link ? 'text-yellow-500' : ''}`}>
            <a class="hover:text-gray-300" href={`#${link}`}>
              {link}
            </a>
          </li>
        )}
      </For>
    </ul>
  )
}

export default Hamburger

