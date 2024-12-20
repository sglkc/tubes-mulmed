import { useLocation } from 'preact-iso'
import { PropsWithChildren } from 'preact/compat'

type ButtonProps = PropsWithChildren<{
  class?: string
  href?: string
  onClick?: () => void
}>

export default function Button(props: ButtonProps) {
  const location = useLocation()
  const handleClick = props.href ? () => location.route(props.href) : props.onClick

  return (
    <button
      children={props.children}
      class={
        'bg-dark-800 p-4 b-1 b-light align-center hover:bg-dark-100 '
          + props.class
      }
      draggable={false}
      onClick={handleClick}
    />
  )
}
