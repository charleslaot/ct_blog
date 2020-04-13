import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface StyledProps {
  section: boolean;
}

export const Container = styled.div<StyledProps>`
  ${tw`flex flex-wrap items-center max-w-screen-md mx-auto p-5`};
  ${({ section }) => section && tw`py-8 sm:py-16`};
`;