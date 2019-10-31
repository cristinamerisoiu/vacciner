import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import Disclaimer from "../components/Disclaimer";

const Disease = styled.details`
  display: flex;
  width: 100px;
  flex-direction: column;
  padding: 15px;
`;

const DiseaseSummary = styled.summary`
  padding: 2px 6px;
  width: 15em;
  box-shadow: 2px 2px 3px grey;
  font-family: "Open Sans", sans-serif;
  border-radius: 10px;
`;

const DiseaseText = styled.div`
  display: flex;
  background-color: #edf2f4;
  box-shadow: 1px 1px 2px grey;
  color: #66023c;
  width: 15rem;
  font-family: "Roboto", sans-serif;
  border-radius: 10px;
  margin-top: 2px;
`;

export default function VaccineContent() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/diseases")
      .then(response => {
        console.log(response);
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {posts.map(post => {
        return (
          <>
            <Disease>
              <DiseaseSummary> Babies:</DiseaseSummary>
              <DiseaseText>
                <ul>
                  <a href="https://www.who.int/news-room/fact-sheets/detail/hepatitis-a">
                    <li>{post.disease1}</li>
                  </a>
                  <a href="https://www.who.int/ith/vaccines/rotavirus/en/">
                    <li>{post.disease3}</li>
                  </a>
                  <a href="https://www.who.int/ith/vaccines/tetanus/en/">
                    <li>{post.disease4}</li>
                  </a>
                  <a href="https://www.who.int/immunization/diseases/rubella/en/">
                    <li> {post.disease5}</li>
                  </a>
                  <a href="https://www.who.int/immunization/diseases/varicella/en/">
                    <li>{post.disease6}</li>
                  </a>
                  <a href="https://www.who.int/en/news-room/fact-sheets/detail/hepatitis-b">
                    <li>{post.disease2}</li>
                  </a>
                  <a href="https://www.who.int/news-room/fact-sheets/detail/poliomyelitis">
                    <li>{post.disease7}</li>
                  </a>
                  <a href="https://www.who.int/immunization/diseases/hib/en/">
                    <li>{post.disease8}</li>
                  </a>
                </ul>
              </DiseaseText>
            </Disease>
            <Disease>
              <DiseaseSummary> Children 5-6 years old:</DiseaseSummary>
              <DiseaseText>
                <ul>
                  <a href="https://www.who.int/ith/vaccines/tetanus/en/">
                    <li>{post.disease4}</li>
                  </a>
                </ul>
              </DiseaseText>
            </Disease>
            <Disease>
              <DiseaseSummary> Youngsters 9-17 years old:</DiseaseSummary>
              <DiseaseText>
                <ul>
                  <a href="https://www.who.int/ith/vaccines/tetanus/en/">
                    <li>{post.disease4}</li>
                  </a>
                  <a href="https://www.who.int/news-room/fact-sheets/detail/poliomyelitis">
                    <li>{post.disease7}</li>
                  </a>
                  <li>
                    All the children vaccines as long as they weren't made or as
                    long as the diseases was not experienced.
                  </li>
                  <a href="https://www.who.int/en/news-room/fact-sheets/detail/human-papillomavirus-(hpv)-and-cervical-cancer">
                    <li>
                      Immunisation against {post.disease9} (girls between 9-14
                      years old)
                    </li>
                  </a>
                </ul>
              </DiseaseText>
            </Disease>
            <Disease>
              <DiseaseSummary> Adults:</DiseaseSummary>
              <DiseaseText>
                <ul>
                  <li>Refresh of tetanus and diphtheria every 10 years</li>
                  <li>
                    Check the status of the vaccines for Poliomyelitis and
                    Pertussis as well as{" "}
                    <a href="https://www.who.int/biologicals/areas/vaccines/mmr/en/">
                      {post.disease10}
                    </a>
                  </li>
                </ul>
              </DiseaseText>
            </Disease>
            <Disease>
              <DiseaseSummary> Adults over 60:</DiseaseSummary>
              <DiseaseText>
                <ul>
                  <li>
                    <a href="https://www.who.int/influenza/gip/en/">
                      Additional vaccines for Influenza (every year)
                    </a>
                    and once for{" "}
                    <a href="https://www.who.int/ith/vaccines/pneumococcal/en/">
                      {post.disease12}
                    </a>
                  </li>
                </ul>
              </DiseaseText>
            </Disease>
            <Disclaimer />
          </>
        );
      })}
    </>
  );
}
