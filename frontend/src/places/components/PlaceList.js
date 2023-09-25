import React from "react";
import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItems from "./PlaceItems";
import Button from "../../shared/components/FormElements/Button";

export default function PlaceList(props) {
  if (props.items.length === 0) {
    return (
      <Card className="place-list center">
        <h2>No Places found. Maybe create one?</h2>
        <Button to="/places/new">Share Place</Button>
      </Card>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItems
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
          onDelete={props.onDeletePlace}
        />
      ))}
    </ul>
  );
}
