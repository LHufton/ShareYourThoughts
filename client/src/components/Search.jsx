const search = (props) => {
  return (
    <form onSubmit={props.on}>
      <input
        type="text"
        name="comments"
        value={props.comments}
        placeholder="Search comments"
        onChange={props.onChange}
      />
      <input
        type="text"
        name="posts"
        value={props.posts}
        placeholder="Search posts"
        onChange={props.onChange}
      />
      <input
        type="text"
        name=""
        value={props.reactions}
        placeholder="Search reactions"
        onChange={props.onChange}
      />
    </form>
  )
}
