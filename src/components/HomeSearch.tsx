import { useState, useEffect, ChangeEvent } from "react";
import { MdPersonSearch } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { SongArray } from "./types/music";
import { Form, Row, Col } from "react-bootstrap";

const HomeSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [music, setMusic] = useState<SongArray[]>([]);
  const location = useLocation();
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(setSearchInput(e.target.value));
  };

  const fetchMusic = async (searchInput: string) => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchInput}`
      );
      if (response.ok) {
        const { data } = await response.json();
        setMusic(data);
        console.log("Mydata", data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMusic(searchInput);
  }, [searchInput]);

  return (
    <Row>
      <Col xs={12} md={12}>
        <h1 className="text-light mt-3 text-center">
          <strong>Strive Music Search Engine</strong> <MdPersonSearch />
        </h1>
        <Form className="mt-5">
          <Form.Group>
            <Form.Control
              className="text-left search-input rounded-pill"
              type="search"
              placeholder="Even Yupiter Can Be Found Here..."
              value={searchInput}
              onChange={handleInput}
            />
          </Form.Group>
        </Form>
      </Col>
      <Col>
        <Row className="mt-5">
          {music.map((song) => (
            <Col xs={12} md={4}>
              <Link to={`/singleSong/${song.id}`}>
                <div
                  className={
                    location.pathname === "/singleSong" ? " active" : ""
                  }
                  ></div>
                <img
                  src={song.album.cover_medium}
                  className="card-img-top pt-2"
                  alt="..."
                  />
              </Link>
              <span className="text-info" style={{fontSize:"20px"}}>{song.title}</span>
              <p className="text-light" >Album - {song.album.title}</p>
              <p className="text-info"><strong>{song.artist.name}</strong></p>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
export default HomeSearch;
