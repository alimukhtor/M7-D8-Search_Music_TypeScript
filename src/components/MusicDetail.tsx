import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { SongDetails } from "./types/music";

const MusicDetail = () => {
  const [songDetails, setSongDetail] = useState<SongDetails | null>(null);

  const { id } = useParams();
  const fetchSongDetail = async () => {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/track/" + id
    );
    if (response.ok) {
      const data = await response.json();
      console.log("Song id:", data);

      setSongDetail(data);
    }
  };

  useEffect(() => {
    fetchSongDetail();
  });

  return songDetails ? (
    <Container>
      <Row className="mt-5">
        <Col xs={6} md={6}>
          <div className="d-flex align-items-end mb-5">
            <img
              src={songDetails.album.cover_big}
              style={{ height: "250px" }}
            />
            <h4 className="mx-3 text-light">{songDetails.artist.name}</h4>
          </div>
        </Col>
        <Col xs={9} md={9}>
          <h4 className="text-start text-muted">Title</h4>
        </Col>
        <Col xs={3} md={3}>
          <FiClock className="mt-2 text-muted" />
        </Col>
        <hr className="text-muted" />
        <Col xs={10} md={10}>
          <span className="d-flex text-light">{songDetails.title}</span>
          {/* <h3 className="text-light">{songDetails.artist.name}</h3> */}
        </Col>
        <Col xs={1} md={1}>
          <span className="text-muted">{songDetails.duration}s</span>
        </Col>
      </Row>
    </Container>
  ) : null;
};
export default MusicDetail;
