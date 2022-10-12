import styled from 'styled-components';
import { StyledCategoryHeader } from '../../styled-components/text';

export const ProjectItemDetails = styled.details``;

export const StyledExpandedContent = styled.div`
  margin-left: 48px;
  padding-bottom: 24px;
`;

export const StyledProjectItem = styled.article`
  border-top: 1px solid #e5e1e6;
  padding: 40px 16px;
`;

export const StyledHeaderContent = styled.summary`
  display: flex;
  align-items: center;
  list-style: none;
  cursor: pointer;

  ::before {
    font-size: 16px;
    text-shadow: rgb(255 215 77 / 60%) -1px -1px 6px, rgb(124 127 255 / 60%) 1px 1px 6px;
    text-align: center;
    width: 48px;
    flex: 0 0 48px;
    letter-spacing: 1px;
    text-indent: 1px;
    content: '[+]';
    transition: letter-spacing 0.2s ease 0.2s, text-indent 0.2s ease 0.2s, color 0.4s ease 0s;
  }
`;

export const StyledFromToInfo = styled(StyledCategoryHeader)`
  font-size: 1em;
`;
