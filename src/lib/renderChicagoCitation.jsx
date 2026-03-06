import publicationTypes from "@/assets/data/publicationTypes.json"

function Person({ person }) {
  return (
    <>
      {person.familyName}, {person.givenName}
    </>
  )
}

function Authors({ authors = [] }) {
  if (authors.length === 0) return null
  if (authors.length === 1) return null
  if (authors.length === 2) {
    return (
      <>
        <Person person={authors[0]} /> and{" "}
        <Person person={authors[1]} />
      </>
    )
  }

  return (
    <>
      <Person person={authors[0]} />
      {authors.slice(1, -1).map((a, i) => (
        <span key={i}>, <Person person={a} /></span>
      ))}
      , and <Person person={authors[authors.length - 1]} />
    </>
  )
}

function Editors({ editors = [] }) {
  if (editors.length === 0) return null

  if (editors.length === 1) {
    const e = editors[0]
    return <>Edited by {e.givenName} {e.familyName}</>
  }

  return (
    <>
      Edited by{" "}
      {editors.map((e, i) => (
        <span key={i}>
          {e.givenName} {e.familyName}
          {i < editors.length - 1 && ", "}
        </span>
      ))}
    </>
  )
}

export function renderChicagoCitation(pub) {
  const hasAuthors = pub.authors && pub.authors.length > 1

  switch (pub.formatType) {
    case publicationTypes["article-journal"]:
      return (
        <>
          {hasAuthors && <><Authors authors={pub.authors} /> </>}
          “{pub.title}.”{" "}
          {pub.containerTitle && <i>{pub.containerTitle}</i>}
          {pub.volume && <> {pub.volume}</>}
          {pub.issue && <>, no. {pub.issue}</>}
          {pub.year && <> ({pub.year})</>}
          {pub.pages && <>: {pub.pages}</>}.
        </>
      )

    case publicationTypes["review"]:
      return (
        <>
          {hasAuthors && <><Authors authors={pub.authors} /> </>}
          Review of {pub.title}.{" "}
          {pub.containerTitle && <i>{pub.containerTitle}</i>}
          {pub.volume && <> {pub.volume}</>}
          {pub.issue && <> ({pub.issue})</>}
          {pub.year && <> ({pub.year})</>}
          {pub.pages && <>: {pub.pages}</>}.
        </>
      )

    case publicationTypes["entry-encyclopedia"]:
    case publicationTypes["chapter"]:
      return (
        <>
          {hasAuthors && <><Authors authors={pub.authors} /> </>}
          “{pub.title}.” In{" "}
          <i>{pub.containerTitle}</i>
          {pub.containerTitle && ","}{" "}
          {pub.editors?.length > 0 && <><Editors editors={pub.editors} />, </>}
          {pub.publisherPlace && pub.publisher && (
            <>{pub.publisherPlace}: {pub.publisher}, </>
          )}
          {!pub.publisherPlace && pub.publisher && (
            <>{pub.publisher}, </>
          )}
          {pub.year}
          {pub.pages && <>: {pub.pages}</>}.
        </>
      )

    case publicationTypes["article-online"]:
    case publicationTypes["article-newspaper"]:
      return (
        <>
          {hasAuthors && <><Authors authors={pub.authors} /> </>}
          “{pub.title}.”{" "}
          {pub.containerTitle && <>{pub.containerTitle}</>}
          {pub.month && <> {pub.month}</>}
          {pub.day && <> {pub.day}</>}
          {pub.year && <> {pub.year}</>}
          .
        </>
      )

    default:
      return (
        <>
          {hasAuthors && <><Authors authors={pub.authors} /> </>}
          “{pub.title}.” {pub.year}.
        </>
      )
  }
}
