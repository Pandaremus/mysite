import React from 'react';
import {ImageViewer} from 'tdesign-react';
import styles from './tdesign-var.css';

export default function BasicImageViewer(props) {
  const trigger = ({open}) => (
    <img src={props.src} onClick={open} />
  )

  return (
    <ImageViewer trigger={trigger} images={[props.src]} />
  );
}