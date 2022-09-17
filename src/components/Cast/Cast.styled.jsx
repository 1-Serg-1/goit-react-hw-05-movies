import styled from 'styled-components';

export const ListCast = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  list-style: none;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const ItemCast = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 200px;
`;

export const ImgCast = styled.img`
  object-fit: cover;
`;
