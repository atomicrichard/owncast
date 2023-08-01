import { render, fireEvent } from "@testing-library/react";




describe('VideoJS', () => {

    it('resizes video correctly', () => {

        const { getByTestId } = render(<VideoJS />);

        const video = getByTestId('video');



        expect(video).toHaveStyle('width: 50%');



        fireEvent.resize(video, { target: { innerWidth: 1024 } });



        expect(video).toHaveStyle('width: 100%');

    });

});
