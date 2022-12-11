import CreatePost from './CreatePost';
import GetFeedExplore from './FeedExplore';

export default function PageExplore() {
	document.title = `Explore | Howler`;
	return (
		<>
			<CreatePost />
			<GetFeedExplore />
		</>
	);
}
