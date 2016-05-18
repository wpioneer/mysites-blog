import React from 'react';
import './style.css';

class PocketFeed extends React.Component {

    render() {

        const bookmarks = this.props
        const pocketFeed = []

        for (var i in bookmarks) {
            if (bookmarks[i].Thumbnail.length != 0) {
                pocketFeed.push(
                    <div className="pocket-feed__cell">
                      <a className="pocket-feed__thumbnail" target="_blank" href={ bookmarks[i].given_url }><img height="150" src={ bookmarks[i].Thumbnail } /></a>
                      <h5 className="pocket-feed__heading"><a target="_blank" href={ bookmarks[i].given_url }>{ bookmarks[i].resolved_title }</a></h5>
                    </div>
                )
            } else {
                pocketFeed.push(
                    <div className="pocket-feed__cell">
                      <h5 className="pocket-feed__heading"><a target="_blank" href={ bookmarks[i].given_url }>{ bookmarks[i].resolved_title }</a></h5>
                    </div>
                )
            }
        }

        return (
            <div className="pocket-feed">
              <h3>Daily Digest</h3>
              <div className="pocket-feed__row">
                { pocketFeed }
              </div>
            </div>
            );
    }
}

export default PocketFeed