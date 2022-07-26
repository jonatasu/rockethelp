import { Text, Button, IButtonProps, useTheme } from 'native-base';

type Props = IButtonProps & {
  title: string;
  isActive?: boolean;
  type: 'open' | 'closed';
};

export function Filter({
  title,
  isActive = false,
  type,
  ...rest
}: Props) {
  const { colors } = useTheme();
  const borderType = isActive ? 1 : 0
  const colorType = type === 'open' ? colors.secondary[700] : colors.green[300];
  return (
    <Button
      variant="outline"
      borderWidth={borderType}
      borderColor={colorType}
      bgColor="gray.600"
      flex={1}
      size="sm"
      {...rest}
    >
      <Text
        color={isActive ? colorType : colors.gray[300]}
        fontSize="xs"
        textTransform="uppercase"
      >
        {title}
      </Text>
    </Button>
  );
}