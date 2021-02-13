<template>
    <div class="events">
        <h1>Events</h1>

        <div class="event_info">

            <p>ComSSA regularly hosts events that everyone is welcome to attend.<br><br/>

                They include industry talks, workshops, quiz nights, revision sessions, and LAN parties just to name a few! <br><br/>


                Our events are listed on the ComSSA <a href="https://www.facebook.com/ComSSACurtin" target="_blank">Facebook page</a>, and announced
                on our <a href="https://discord.gg/SuwfFfjYJB" target="_blank">Discord</a>. Follow us on social media to keep up to date with
                the latest events and join our Discord to become a part of the conversation.<br><br/>
            </p>

            <!--<img id="about_image_1" src="~/assets/img/revision.jpg"/>-->

            <!--<div class="fb-event-embed">
                <div class="fb-page"
                     data-href="https://www.facebook.com/ComSSACurtin"
                     data-tabs="events"
                     data-width=""
                     data-height=""
                     data-small-header="false"
                     data-adapt-container-width="true"
                     data-hide-cover="false"
                     data-show-facepile="true">Facebook events (may be blocked by your ad/tracker-blocker - fair enough)
                     <blockquote cite="https://www.facebook.com/ComSSACurtin"
                                 class="fb-xfbml-parse-ignore">
                                 <a href="https://www.facebook.com/ComSSACurtin"></a>
                     </blockquote>
                </div>
            </div>-->

        </div>

        <div class="row_2">
            <iframe src="https://discord.com/widget?id=673182254930984980&theme=dark"
                id="discord_embed"
                allowtransparency="true"
                frameborder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
            </iframe>

            <div class="fb-timeline-embed">
                <div class="fb-page"
                    data-href="https://www.facebook.com/ComSSACurtin"
                    data-tabs="timeline"
                    data-width=""
                    data-height="500"
                    data-small-header="true"
                    data-adapt-container-width="true"
                    data-hide-cover="true"
                    data-show-facepile="true"> Facebook timeline (may be blocked by your ad/tracker-blocker - fair enough)
                    <blockquote cite="https://www.facebook.com/ComSSACurtin"
                                class="fb-xfbml-parse-ignore">
                                <a href="https://www.facebook.com/ComSSACurtin"></a>
                    </blockquote>
                </div>
            </div>

            <img id="event_image_1" src="~/assets/img/event_2.jpg"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Events',
    mounted() { //Facebook embeds do not appear on component mount, for some reason the included script has to be reloaded
        this.$loadScript(
        "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0"
        ).then(() => {
            this.$nextTick(() => {
                window.FB.XFBML.parse();
            });
        }).catch(() => {
            console.log("Error Loading Facebook Script");
        });
    }
}
</script>