import * as React from 'react';
import { DiamondNodeModel1 } from './DiamondNodeModel';
import { DiagramEngine, PortModelAlignment, PortWidget } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';
import solar from '../../assets/images/solarpanel.jpeg'

export interface DiamondNodeWidgetProps {
	node: DiamondNodeModel1;
	engine: DiagramEngine;
	size?: number;
}

namespace S {
	export const Port = styled.div`
		width: 16px;
		height: 16px;
		z-index: 10;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 8px;
		cursor: pointer;


		&:hover {
			background: rgba(0, 0, 0, 1);
		}
	`;
}

/**
 * @author Dylan Vorster
 */
export class DiamondNodeWidget1 extends React.Component<DiamondNodeWidgetProps> {
	render() {
		return (
			<div
				className={'diamond-node'}
				style={{
					position: 'relative'
					// width: this.props.size,
					// height: this.props.size
				}}
			>
				{/* <svg
					width={this.props.size}
					height={this.props.size}
					dangerouslySetInnerHTML={{
						__html:
							`
          <g id="Layer_1">
          </g>
          <g id="Layer_2">
            <polygon fill="mediumpurple" stroke="${
							this.props.node.isSelected() ? 'white' : '#000000'
						}" stroke-width="3" stroke-miterlimit="10" points="10,` +
							this.props.size / 2 +
							` ` +
							this.props.size / 2 +
							`,10 ` +
							(this.props.size - 10) +
							`,` +
							this.props.size / 2 +
							` ` +
							this.props.size / 2 +
							`,` +
							(this.props.size - 10) +
							` "/>
          </g>
        `
					}}
				/> */}
                <div className=' border-[1px] border-black -z-10 p-2'>
					<img src={solar} alt='udshj' className=' -z-10 pointer-events-none' 	></img>
				</div>
				<PortWidget
					style={{
						top: this.props.size-50,
						right: -8,
						position: 'absolute'
					}}
					className=""
					port={this.props.node.getPort(PortModelAlignment.LEFT)}
					engine={this.props.engine}
				>
					<S.Port />
				</PortWidget>
				{/* <PortWidget
					style={{
						left: this.props.size / 2 - 8,
						top: -8,
						position: 'absolute'
					}}
					port={this.props.node.getPort(PortModelAlignment.TOP)}
					engine={this.props.engine}
				>
					<S.Port />
				</PortWidget>
				<PortWidget
					style={{
						left: this.props.size - 8,
						top: this.props.size / 2 - 8,
						position: 'absolute'
					}}
					port={this.props.node.getPort(PortModelAlignment.RIGHT)}
					engine={this.props.engine}
				>
					<S.Port />
				</PortWidget>
				<PortWidget
					style={{
						left: this.props.size / 2 - 8,
						top: this.props.size - 8,
						position: 'absolute'
					}}
					port={this.props.node.getPort(PortModelAlignment.BOTTOM)}
					engine={this.props.engine}
				>
					<S.Port />
				</PortWidget> */}
			</div>
		);
	}
}