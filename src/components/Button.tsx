import { Button as NBButton, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <NBButton
      bg="green.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: 'green.500' }}
      { ...rest }
    >
      <Heading>
        {title}
      </Heading>
    </NBButton>
  );
}