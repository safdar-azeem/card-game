import React from 'react'

const Loading = ({className,size}) => {
    return (
			<div className={className}>
				<div class={`spinner-border-${size} spinner-border`} role='status'>
					<span class='visually-hidden'>Loading...</span>
				</div>
			</div>
		);
}

export default Loading
