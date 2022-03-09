import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FiClock } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { SongArray, SongDetails, Album } from "./types/music";

const MusicDetail = () => {
  const [songDetails, setSongDetail] = useState<SongDetails>({
    title: '',
    duration: 0,
  });

  const { id } = useParams();
  // const trackId = params.id
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
  }, []);

  return (
    <Container>
      <Row  className="mt-5">
        <Col md={6}>
          {/* <img src={songDetails.album.cover_medium}/> */}
        </Col>
        <Col md={9}>
          <div className="">
            <h4 className="text-start text-muted">Title</h4>
          </div>
        </Col>
        <Col md={3}>
          <FiClock className="mt-2 text-muted" />
        </Col>
        <hr className="text-muted" />
        <Col md={10}>
          <span className="d-flex text-light">{songDetails.title}</span>
        </Col>
        <Col md={1}>
          <span className="text-muted">{songDetails.duration}</span>
        </Col>
        <Col md={1}>
          <FcLike />
        </Col>
      </Row>
    </Container>
  );
};
export default MusicDetail;
