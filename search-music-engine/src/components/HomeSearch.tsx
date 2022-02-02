import { useState, useEffect, ChangeEvent } from "react";
import { MdPersonSearch } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { IMusic } from "./types/music";
import { Form } from "react-bootstrap";

const HomeSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [music, setMusic] = useState<IMusic[]>([]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(setSearchInput(e.target.value));
  };

  const fetchMusic = async (searchInput:string) => {
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
    <>
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
      {/* {
            music.map(song => (
                <h1 key={song.id}>{song.artist.name}</h1>

            ))
        } */}
    </>
  );
};
export default HomeSearch;
