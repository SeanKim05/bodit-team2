import { CSVLink } from 'react-csv';
import styled from 'styled-components';

export const MainContainer = styled.main``;

export const CSVButton = styled(CSVLink)`
  color: #fff;
  text-decoration: none;
  &:active {
    background-color: #fff;
    color: ${({ theme }) => theme.mainBlue};
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  header {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    background-color: rgba(39, 127, 242);

    .headerContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 8px;
      color: #fff;

      .leftContainer {
        display: flex;
        svg {
          cursor: pointer;
          &:first-child {
            margin-right: 10px;
          }
          &:active {
            color: #d1d1d1;
          }
        }
      }

      .rightContainer {
        display: flex;
        justify-content: flex-end;
        align-items: center;

        button {
          margin-right: 25px;
          border: 2px solid #fff;
          border-radius: 5px;
          background-color: ${({ theme }) => theme.mainBlue};
          font-weight: 700;
          font-size: 1rem;
          transition: 500ms;

          @media screen and (max-width: ${({ theme }) => theme.surfaceDuo}) {
            margin-right: 15px;
          }
          cursor: pointer;
          &:active {
            background-color: #fff;
            color: ${({ theme }) => theme.mainBlue};
          }
        }
        .calendar-box {
          color: #fff;
          font-size: 25px;
          font-weight: 700;
          &:active {
            color: #d1d1d1;
          }

          span {
            cursor: pointer;
            @media screen and (max-width: ${({ theme }) => theme.iPhoneXr}) {
              display: none;
            }
          }
          svg {
            margin-right: 5px;
            cursor: pointer;
          }
        }
      }
    }
  }

  ${MainContainer} {
    width: 95%;
    max-width: 1200px;

    .title {
      margin-top: 100px;
      text-align: center;

      &:first-child {
        margin-top: 150px;
      }

      span {
        display: inline-block;
        width: 50px;
        padding: 8px;
        background-color: #1c74e8;
        border-radius: 30px;
        color: #fff;
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
          0 1px 3px rgba(0, 0, 0, 0.08);
      }
    }

    .graphBox {
      margin-top: 20px;
      margin-bottom: 50px;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
    }

    .empty-data {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 72px;
      bottom: 0;
      left: 0;
      right: 0;
      font-size: 40px;

      @media screen and (max-width: ${({ theme }) => theme.surfaceDuo}) {
        font-size: 23px;
      }
    }
  }
`;
