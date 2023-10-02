import styled from "@emotion/styled";

export const HomeStyle = styled.div`
  height: 100vh;
  overflow-x: hidden;

  main {
    padding: 50px 0px;
    display: flex;
  }
  .intro {
    position: relative;
    min-width: 800px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .intro-title {
      font-size: 80px;
      margin-bottom: 40px;
    }

    .intro-footer {
      display: flex;
      width: 100%;
      justify-content: flex-end;
      margin-top: auto;

      .scroll-hint {
        align-self: flex-end;
      }
    }
  }

  .projects-container {
    display: flex;
    gap: 200px;
    margin-left: 15vw;

    .projects-section {
      display: flex;
      gap: 50px;

      .projects-figure {
        border-radius: 15px;
        overflow: hidden;
        height: 800px;
        width: 800px;
        display: block;
        position: relative;

        img {
          object-fit: cover;
        }
      }
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;
`;
