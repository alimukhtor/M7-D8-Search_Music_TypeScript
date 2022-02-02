import { useState, useEffect, ChangeEvent } from "react";
import { MdPersonSearch } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { Welcome, Album, Artist } from "./types/music";
import { Form, Container, Row, Col } from "react-bootstrap";

const HomeSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [music, setMusic] = useState<Welcome[]>([]);
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
        const data = await response.json();
        setMusic(data.data);
        console.log(data);
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
                    <Col xs={8} md={3}>
                    <img
                        src={song.album.cover_small}
                        className="card-img-top pt-2 img-fluid"
                        alt="..."
                        // style={{ objectFit: "cover" }}
                    />
                    <div className="card-body text-light">
                        <div className="buttoncard"></div>
                        <Link to="/singleSong/:trackId">
                        <div
                            className={
                            location.pathname === "/favorites" ? " active" : ""
                            }
                            style={{ fontSize: "25px" }}
                        >
                            Song - {song.title}
                        </div>
                        </Link>
                        {/* <Link to="/singleSong/:trackId">
                        <p className="hp-subhero-title">Song - {song.title}</p>
                         </Link> */}
                        <p>Album - {song.album.title}</p>
                        <p className="hp-subhero-subtitle mb-0">{song.artist.name}</p>
                    </div>
                    </Col>
                ))}
            </Row>
      </Col>
    </Row>
  );
};
export default HomeSearch;
