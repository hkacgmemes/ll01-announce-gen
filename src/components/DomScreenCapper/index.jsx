import React, { Fragment, useRef } from 'react';
import FileSaver from "file-saver";
// const html2canvas = process.browser ? require('html2canvas') : null;
const dom2image = typeof window !== 'undefined' ? require('dom-to-image') : null;

const DomScreenCapper = ({
    children,
	beforeSave,
	afterSave,
}) => {
	const drawer = useRef();

	function saveImage() {
		if (typeof beforeSave === 'function') {
			beforeSave();
		}

		dom2image.toJpeg(drawer.current, {
			quality: .9
		})
		    .then(function (dataUrl) {
		    	FileSaver.saveAs(dataUrl, `announcement.jpg`);
				if (typeof beforeSave === 'function') {
					afterSave();
				}
		    });
	}

	return (
		<Fragment>
            <div ref={drawer}>
                {children}
            </div>
			<p>
		    	<button id="save" onClick={saveImage}>save</button>
		    </p>
		</Fragment>
	)
};

export default DomScreenCapper;