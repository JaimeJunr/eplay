import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  variant: 'primary' | 'secondary'
}

export default function Button({
  type,
  children,
  title,
  to,
  onClick,
  variant = 'primary'
}: Props) {
  if (type === 'button')
    return (
      <S.ButtonContain
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </S.ButtonContain>
    )
  return (
    <S.ButtonLink to={to as string} title={title}>
      {children}
    </S.ButtonLink>
  )
}
