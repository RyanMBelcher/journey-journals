<Container className="travel">
            <Row>
                <Card xl={5} lg={5}>
                    <h5>Username</h5>
                    <p>date</p>
                    <Card.Img className="travelImg" variant="top" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1421&q=80" />
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <Form className="travelComment">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={5} size="lg" type="text" placeholder="Your comment here" />
                        </Form.Group>
                        <Button className="commentButton" as="input" type="submit" value="Submit" />{' '}
                    </Form>
                </Card>
            </Row>
            <Row className="comments">
                <Card xl={3}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare aenean euismod elementum nisi. Pellentesque habitant morbi tristique senectus et netus. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Risus ultricies tristique nulla aliquet. Quis vel eros donec ac odio. Semper feugiat nibh sed pulvinar proin gravida. Odio eu feugiat pretium nibh ipsum. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Tincidunt eget nullam non nisi. Arcu cursus vitae congue mauris. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Quis ipsum suspendisse ultrices gravida.</p>
                    <a href="google.com" target="blank"><i class="fa-solid fa-trash"></i></a>
                </Card>
            </Row>
        </Container>