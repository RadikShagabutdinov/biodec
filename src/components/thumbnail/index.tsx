import * as React from 'react';
import Img from 'gatsby-image';
import styles from './thumbnail.module.css';

interface INode {
  id: string;
  name: string;
  publicURL: string;
  extension: 'png' | 'pdf' | 'svg',
  childImageSharp: any,
}

interface IItem {
  node: INode,
}

interface IProps {
  edges: [IItem, IItem],
}

interface IAsetGroup {
  png: INode;
  pdf: INode;
  svg: INode;
}

function getItem(edge: [IItem, IItem]): IAsetGroup {
  return edge.reduce((a, v) => ({ ...a, [v.node.extension]: v.node }), {} as IAsetGroup);
}

function Thumbnail({ edges }: IProps) {
  const { svg, pdf } = getItem(edges);
  return (
    <a
      href={pdf.publicURL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
      title={pdf.name}
    >
      <div className={styles.wrapper}>
        <img src={svg.publicURL} alt="" className={styles.ico} />
      </div>
      {svg.name}
    </a>
  );
}

export default Thumbnail;